<?php
// 项目基类

// 项目基类集成了框架内核控制器，项目中的控制器再继承该基类
class App extends Controller{

// 前缀操作
// 后置操作
// 空操作


	public function base(){

		$this->ctest();
	
		echo '<br>这里是基类方法<br>';
	}


}



?>