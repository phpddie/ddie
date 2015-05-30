<?php

class Page extends App{


	public function index(){
		$this->load->view('index');
	
	}


	// 默认视图调用
	function dd(){
		$this->base();
		echo '<br>';
		$data['msg'] = '欢迎使用DDIE框架';
		$this->load->view('index',$data);  // 直接输出视图内容
		// $fetch = $this->load->view('index',$data,false);   // 获取视图内容但不输出
		// echo $fetch;
	}


	
	function test($param=null,$id=null){
		$smarty = $this->smarty();
		$smarty->assign('data','您好!');
		$smarty->display('page/test.php');
	
	}

	// 整合Smamrty
	function smarty(){
		// 视图目录
		$view_path = ROOT.'/'.APPPATH.'/View';
		$view_path = str_replace('\\', '/', $view_path);
		// smarty目录
		$smarty_path = ROOT.'/Libs/smarty/Smarty.class.php';
		$smarty_path = str_replace('\\', '/', $smarty_path);

		require_once $smarty_path;
		$smarty = new Smarty();
		$smarty->left_delimiter  = '<{';     // 定义定界符
        $smarty->right_delimiter = '}>';		
		
		$smarty->caching = false;            // 启用缓存
		$this->cache_lifetime = 3600*2;      // 缓存时间 2小时

		// 目录配置
        $smarty ->setTemplateDir($view_path);             // 设置模板目录
		$smarty ->setCompileDir($view_path.'/temp');      // 设置编译目录	
		$smarty ->setCacheDir($view_path.'/cache');       // 缓存目录
		return $smarty;
	
	}

}

?>