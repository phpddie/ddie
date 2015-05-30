<?php

class smarty {

	function __construct(){
		parent::__construct();.

		// Smarty视图目录
		$view_path = ROOT.DS.APPPATH.DS.'View'.DS.'Runtime';

		// 载入Smarty类文件
		require_once ROOT.DS.'Libs/smarty/Smarty.class.php';
		$smarty = new Smarty();
		$smarty->left_delimiter  = '<{';     // 定义定界符
        $smarty->right_delimiter = '}>';		
		
		$smarty->caching = false;            // 启用缓存
		$this->cache_lifetime = 3600*2;      // 缓存时间2小时

		// 目录配置
        $smarty->setTemplateDir($view_path);             // 模板目录
		$smarty->setCompileDir($view_path.'/compile');   // 编译目录	
		$smarty->setCacheDir($view_path.'/cache');       // 缓存目录
		
		return $smarty;
	}
}



?>