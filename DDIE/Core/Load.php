<?php

class Load{


	// 视图显示输出
	function display($view,$vars){
		$this->view($view,$vars,false);
	
	}


	/*
	 * 视图文件名
	 * 变量参数
	 * 是否输出视图内容
	 */
	function view($view,$vars=null,$return=true)
	{

		$Rinfo = get_Rinfo();    // 路由信息

		// 视图文件扩展名处理(默认使用.php扩展名)
		$ext = pathinfo($view, PATHINFO_EXTENSION);          // 获取传入参数的后缀名
		$view_file = ($ext === '') ? $view.'.php' : $view;   // 改为从配置读取扩展名

		// 视图文件绝对路径
		$view_path = VIEWPATH.DS.$Rinfo->class.DS.$view_file;
		if (!file_exists($view_path))
		{
			// 视图文件不存在
			echo 'This View File '.$view_path.'Is Not Exist';
		}
		// 变量处理(数组转换成变量)
		if (is_array($vars))
		{
			extract($vars);
		}
		// 开启OB缓存
		ob_start();
		// 引入视图文件
		include($view_path);          // 引入的文件被缓存在OB缓存
		$contents = ob_get_clean();   // 获取缓存内容并情况OB缓存
		
		// 返回视图内容或直接输出
		if($return){
			echo $contents;           // 相当于Smarty的display()方法
		}else{
			return $contents;         // 相当于Smarty的fetch()方法
		}

	}

	// VIEW方法视图获取是获取控制器对应目录下的视图文件
	// 定义一个方法用来获取指定目录中的视图文件，方便公共文件的获取，也可以获取用户自定义目录中的文件
	// 如果定义了布局，则进行布局处理，参考CK。

	

}
?>