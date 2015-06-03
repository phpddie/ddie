<?php
/*
 * 路由调度处理类
 * @author  Damon
 * @date 2015/5/17
 */
class Rount{	
	public $uri;
	private static $instance;

	function __construct($param){
		$this->uri = $param;
		$this->_set_route();
		self::$instance =& $this;   // 把当前对象信息存储到静态变量
	}


	public static function &get_info()
	{
		return self::$instance;
	}


	/*
	 * 路由设置
	 * @author  Damon
	 * @date 2015/5/17
	 */
	function _set_route(){
		// 载入当前访问应用的路由配置文件

		$module = ucfirst($this->uri->module);
		if(file_exists($module.'/Config/routes.php'))
		{
			include($module.'/Config/routes.php');
			if(isset($route) && is_array($route))
			{
				$this->routes = $route;
				// 路由rewrite处理
			}
		}
		// 默认控制器
		if(!isset($this->uri->segments[0]))
		{
			$this->uri->segments[0] = $this->uri->uri_config[0];
		}
		// 默认操作
		if(!isset($this->uri->segments[1]))
		{
			$this->uri->segments[1] = $this->uri->uri_config[1];
		}
		$this->_set_request($this->uri->segments);
	}


	 /*
	 * 当前请求路由设置
	 * @author  Damon
	 * @date 2015/5/17
	 */
	protected function _set_request($segments = array())
	{
		// 默认路由
		if(empty($segments))
		{
			$segments = $this->uri->uri_config;
		}
		$this->module = $this->uri->module;  // 访问的模块
		$this->class  = $segments[0];        // 访问的控制器
		$this->method = $segments[1];        // 访问的操作
	}


}


?>