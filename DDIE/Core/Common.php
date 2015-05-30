<?php

// 框架公共函数库

/**
 * 类注册(载入并实例化)
 * @param	类名
 * @param	路径(相对框架路径)
 * @param	类参数
 * @return	对象
 */
function load_class($class,$directory,$param=null){
	$path = DDIE.DS.$directory.DS.$class.'.php';   // 文件路径
	$file = fExists($path);                          // 判断文件是否存在

	if($file)
	{	
		require_once($path);
		if (class_exists($class,FALSE)){
			$obj = empty($param)?new $class:new $class($param);
			return $obj;
		}else{
			$msg = 'Error_404';
			return $msg;
		}
	}
}

/*
 * 判断文件是否存在
 * @param   文件路径
 * @return  判断结果
 * @author  Doman
 * @date    2015/5/18
 */ 
function fExists($path){
	return file_exists($path)?true:false;
}
/*
 * 判断类是否存在
 * @param   类名
 * @param   是否调用__autoload()
 * @return  (bool)判断结果
 * @author  Doman
 * @date    2015/5/19
 */ 
function cExists($class,$bool=false){
	return (class_exists($class,$bool)===FALSE)?true:false;
}
/*
 * 判断类方法是否存在
 * @param   类名或对象
 * @param   类方法名
 * @return  (bool)判断结果
 * @author  Doman
 * @date    2015/5/19
 */ 
function cMethod($class,$method){
	return method_exists($class,$method)?true:false;
}
/*
 * 获取类中所有方法
 * @param   类名
 * @return  (array)类方法结果集
 * @author  Doman
 * @date    2015/5/19
 */ 
function gMethod($class){
	return get_class_methods($class);
}
/*
 * 返回类默认属性或对象属性(对象转换为数组)
 * @param   类名或对象名
 * @return  (array)类默认属性
 * @author  Doman
 * @date    2015/5/19
 */ 
function classVar($class,$type=1){
	if($type==1){
		return get_class_vars($class);
	}else{
		return get_object_vars($class);
	}
}
/*
 * 返回对象的类名
 * @param   对象
 * @return  (string)类名
 * @author  Doman
 * @date    2015/5/19
 */ 
function className($obj){
	return get_class($obj);
}
/*
 * 返回对象或类的父类名
 * @param   对象或类
 * @return  (string)类名
 * @author  Doman
 * @date    2015/5/19
 */ 
function pclassName($obj){
	return get_parent_class($obj);
}


/*
 * 配置信息读取
 * @param   
 * @return  
 * @author  Doman
 * @date    
 */ 
function gConf($item=null){
	// 如果指定项为空，则返回所有的配置信息，否则，返回指定项配置信息
	// 载入系统配置和当前访问项目配置，如果项目配置覆盖系统配置
}





function pr($data){
	echo '<pre>';
	print_r($data);
}



function comfun(){
	echo '公共函数库';
}

?>