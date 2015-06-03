<?php
/*
 * URI处理类
 * @author  Damon
 * @date    2015/5/17
 */
class URI{
	
	public $uri_string = '';       // URI切分	
	public $segments   = array();  // URI切分
	public $uri_config = array();  // URI配置
	public $uri_suffix = '';       // URI后缀
	
	public function __construct(){
		$uri = $this->_parse_uri();		
		$this->_uri_string($uri);
		$this->_uri_config($this->module);
	}


	/**
	 * URI解析
	 * @param   NULL
	 * @return  解析后的结果
	 * @author  Damon
	 * @date    2015/5/17
	 */
	protected function _parse_uri()
	{
		if(!isset($_SERVER['REQUEST_URI'],$_SERVER['SCRIPT_NAME']))
		{
			return '';
		}

		// URL解析
		$uri   = parse_url($_SERVER['REQUEST_URI']);          // URI处理		
		$query = isset($uri['query'])? $uri['query']: '';     // URI访问参数
		$uri   = isset($uri['path']) ? $uri['path'] : '';     // URI访问路径
		
		// URI入口文件去除(如果存在)
		if(isset($_SERVER['SCRIPT_NAME']))
		{
			if (strpos($uri, $_SERVER['SCRIPT_NAME']) === 0)
			{
				$uri = substr($uri,strlen($_SERVER['SCRIPT_NAME']));
			}
			elseif (strpos($uri,dirname($_SERVER['SCRIPT_NAME'])) === 0)
			{	
				$uri = substr($uri,strlen(dirname($_SERVER['SCRIPT_NAME'])));
			}
		}	
		
		// 请求参数处理
		if(trim($uri, '/') === '' && strncmp($query, '/', 1) === 0)
		{
			$query = explode('?', $query, 2);
			$uri = $query[0];
			$_SERVER['QUERY_STRING'] = isset($query[1]) ? $query[1] : '';
		}
		else
		{
			$_SERVER['QUERY_STRING'] = $query;
		}

		if ($uri === '/' OR $uri === '')
		{
			return '/';
		}
		return $uri;
	}


	/**
	 * URI处理
	 * @param 	URI
	 * @author  Damon
	 * @date    2015/5/17
	 */
	protected function _uri_string($uristr)
	{
		$this->uri_string = $uristr;
	
		if ($uristr !== '')
		{
			// URL后缀处理
			// 要从配置读取，而不是写死
			$suffix = '.html';			
			if ($suffix !== '')
			{
				$slen = strlen($suffix);                   // 后缀长度
				if (substr($uristr, -$slen) === $suffix)
				{
					$uristr = substr($uristr, 0, -$slen);  // 清除URL后缀
				}
			}
		
			// URI处理
			$uristr = trim($uristr,'/');
			if(!empty($uristr)){
				$uriarr = explode('/',$uristr);
				// 项目模块处理
				$module = ROOT.DS.ucfirst($uriarr[0]);
				if(file_exists($module)){
					$this->module = $uriarr[0];
					unset($uriarr[0]);
				}else{
					$this->module = MODULE;
				}

				// URI数据存储
				foreach($uriarr as $val)
				{
					$val = trim($val);
					if ($val !== '')
					{
						$this->segments[] = $val;
					}
				}
			}else{
				$this->module = MODULE;
			}
		}
	}

	/*
	 * 获取URI配置
	 * @author  Damon
	 * @date    2015/6/3
	 */
	protected function _uri_config($module)
	{

		if(file_exists($module.'/Config/config.php')){
			include($module.'/Config/config.php');
		}
		// 自定义路由
		if(isset($config['url_controller'])){
			$this->uri_config[] = $config['url_controller'];
		}else{
			$this->uri_config[] = 'Page';
		}
		// 自定义控制器
		if(isset($config['url_action'])){
			$this->uri_config[] = $config['url_action'];
		}else{
			$this->uri_config[] = 'index';
		}
		// URI后缀
		if(isset($config['url_suffix'])){
			$this->uri_suffix = $config['url_suffix'];
		}else{
			$this->uri_suffix = '.html';
		}		
		return;
	}
	
}

?>