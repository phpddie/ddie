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

		// 读取配置信息
		// $this->config =& load_class('Config', 'core');

		$this->_set_routing();
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
	function _set_routing(){

		// 载入当前访问应用的路由配置文件
		if(file_exists(APPPATH.'/config/routes.php'))
		{
			include(APPPATH.'/config/routes.php');
			if(isset($route) && is_array($route))
			{
				$this->routes = $route;
			}
		}

		if($this->uri->uri_string !== '')
		{
			// 指定了URI参数
			$this->_parse_routes();
		}
		else
		{	// 没有指定URI参数，则访问默认控制器
			$this->_default_router();
		}

		$this->_set_request(array_values($this->uri->segments));
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
			$this->_default_router();
			return;
		}

		// 要访问的控制器
		$this->class = $segments[0];
		// 要访问的操作
		if (isset($segments[1]))
		{
			$this->method = $segments[1];
		}
		else
		{
			$this->method = 'index';
		}
		// 整理元素的位置
		array_unshift($segments, NULL);
		unset($segments[0]);
		$this->uri->segments = $segments;
	}

	 /*
	 * 路由参数处理
	 * @author  Damon
	 * @date 2015/5/17
	 */
	protected function _parse_routes()
	{
		// URI参数处理
		$uri = implode('/', $this->uri->segments);
		// Get HTTP verb
		$http_verb = isset($_SERVER['REQUEST_METHOD']) ? strtolower($_SERVER['REQUEST_METHOD']) : 'cli';
		$this->_set_request(array_values($this->uri->segments));
	}

	/*
	 * 默认路由处理
	 * @author  Damon
	 * @date 2015/5/19
	 */
	protected function _default_router(){
		// 读取用户配置，看是否设置了默认访问控制器，没有则使调用系统定义的默认路由
		if(file_exists(APPPATH.'/config/routes.php'))
		{
			include(APPPATH.'/config/routes.php');
			if(isset($route) && is_array($route))
			{
				$this->routes = $route;
			}
		}

		$this->uri->segments = array('Page','index');
	}



}


?>