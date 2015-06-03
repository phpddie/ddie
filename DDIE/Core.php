<?php
header("Content-type:text/html;charset=utf-8");

define('VERSION', '1.0.0');         // 框架版本号


// 引入公共函数库(必须)
require_once 'Core/Common.php';
// 框架目录(重要)
if(!defined('DDIE')){define('DDIE', str_replace('\\', '/',dirname(__FILE__)));}

// 站点目录
if(!defined('ROOT')){
	define('ROOT', dirname(dirname(__FILE__)));
}

// 默认项目目录
if(!defined('MODULE')){
	define('MODULE','App');
}

// 项目目录(默认)
//if(!defined('APPPATH')){define('APPPATH','app');}


/*
 * ====================配置处理========================
**/
// 引入系统配置和项目公共配置和项目配置，项目配置会覆盖系统默认配置
// $config = array_merge($sys,$conf,$app);




/*
 * ====================路由处理========================
**/
// URI处理类
$URI = load_class('URI','Core');
// Rount处理类
$Rount = load_class('Rount','Core',$URI);

// 路由信息获取
function &get_Rinfo()
{
	// 返回Rount类的路由信息
	return Rount::get_info();
}


// 一些需要全局使用的数据保存到静态变量中


/*
 * ====================框架基类========================
**/
// 载入控制器类
$Obj = load_class('Controller','Core',$Rount);




/*
 * ====================控制器处理========================
**/
$module = ucfirst($Rount->module);
$class  = ucfirst($Rount->class);                   // 当前访问控制器
$method = $Rount->method;                           // 当前访问操作
$params = array_slice($Rount->uri->segments,2);     // 请求参数



// 根据用户访问的模块，调用对应模块下的控制器


// 除了使用__autoload()方法来自动载入类，还可以定义一个方法来进行类的载入和实例化。类似CI框架的load_class()方法

// 返回已定义的类(含系统自带类)
// $declared = get_declared_classes();

// 在自动载入方法中使用变量无法识别，是用常量是不行的，访问模块是会改变的。
// 把变量传入到常量中？？？


// 项目控制器目录
if(!defined('CDIR')){
	define('CDIR',ROOT.DS.$Rount->module.DS.'Controller'.DS);
}
// __autoload()的替代方法，遇到未定义的类，则调用import()方法
spl_autoload_register('import');
function import($className){
	require_once CDIR.$className.'.class.php';	
}


// 判断控制器文件是否存在
$CExists = CDIR.$class.'.class.php';
$file = fExists($CExists);
if($file){
	$cExists = cExists($class);    // 检测类是否存在	
	if($cExists){
		$Controller = new $class;		
	}else{
		echo '类不存在';
		exit;
		// 调用一个emptyclass(TP框架的处理方式)
		// 先检查用户是否定义emptyclass，定义则执行，不定义则直接输出错误信息
	}
}else{
	echo '类文件不存在';
	exit;
}

// 类方法是否存在
$cMethod = cMethod($Controller,$method);
if(!$cMethod){
	// 这种方式判断不行，如protected和private方法不可访问，但是存在。可用使用__call()来判断当前方法是否存在和是否可访问。
	echo '不存在该类方法';exit;
	// 调用一个emptymethod(TP框架的处理方式)
	// 先检查用户是否定义emptymethod，定义则执行，不定义则直接输出错误信息
}

/*
$parent = get_parent_class($class);
$PExists = APPPATH.'/Controller/'.$parent.'.class.php';
$Pfile = fExists($PExists);
if($Pfile){
	require_once $PExists;
	echo '存在父类<br>';
}
*/



// 前置方法调用
// echo '<br>函数调用前，先调用前置方法<hr>';

// 经过前面的判断(类文件存在、类存在、类方法存在，则进行路由调用)
// 调用回调函数
call_user_func_array(array(&$Controller,$method),$params);

// 后置方法调用
// echo '<br>函数调用后，再调用后置方法<hr>';



/*
 * ====================模型处理========================
**/




/*
 * ====================视图处理========================
**/
// 视图处理
// 视图处理类是load类，该类在框架控制器中已引入，在项目控制器直接调用方法即可。
// 视图直接使用Smarty，考虑如何把Smarty整合到框架中。











/*
// URI分两种情况处理，有?和没?

// URI：即域名后面部分，如www.ddie.com/home/good/show/23的URI是/home/good/show/23
$URI = strtolower($_SERVER['REQUEST_URI']);  // 如果URI=/，则说明只有域名

// 得到的URI可能含有项目名称，也可能不含项目名称(默认模块可以不含项目名，如home)
// 通过定义项目列表，如果第一个参数不存在项目列表，则认为是访问默认项目，如果存在项目列表，则说明是访问指定项目
*/



?>