<?php

class Controller{
	public function __construct()
	{
		// 载入视图处理文件并实例化
		$this->load = load_class('Load', 'Core');

		// 模型、第三方加载类(如Smarty)
	}



	


	function ctest(){
		echo '这是框架类方法';
	
	}

}



?>