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
		if(file_exists(APPPATH.'/Config/routes.php'))
		{
			include(APPPATH.'/Config/routes.php');
			if(isset($route) && is_array($route))
			{
				$this->routes = $route;

				// 路由rewrite处理
			}
		}

		if($this->uri->uri_string !== '')
		{
			// 指定了URI参数
			$this->_parse_routes();
		}
		else
		{	// 默认控制器
			$this->uri->segments = $this->uri->uri_config;
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
			$this->uri->segments = $this->uri->uri_config;
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


}


?>