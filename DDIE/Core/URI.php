<?php

/*
 * URI处理类
 * @author  Damon
 * @date 2015/5/17
 */
class URI{
	// URI路径
	public $uri_string = '';
	// URI切分
	public $segments = array();
	
	function __construct(){	
		$uri = $this->_parse_request_uri();
		$this->_set_uri_string($uri);
	}


	/**
	 * URI解析
	 * @param   NULL
	 * @return  解析后的结果
	 * @author  Damon
	 * @date 2015/5/17
	 */
	protected function _parse_request_uri()
	{
		if ( ! isset($_SERVER['REQUEST_URI'], $_SERVER['SCRIPT_NAME']))
		{
			return '';
		}
		// URL解析
		$uri = parse_url($_SERVER['REQUEST_URI']);
		// ?后的参数部分
		$query = isset($uri['query']) ? $uri['query'] : '';
		// URI访问非参数部分
		$uri = isset($uri['path']) ? $uri['path'] : '';
		

		// 脚本文件名称
		if (isset($_SERVER['SCRIPT_NAME'][0]))
		{
			if (strpos($uri, $_SERVER['SCRIPT_NAME']) === 0)
			{
				// 存在入口文件则去除入口文件
				$uri = substr($uri,strlen($_SERVER['SCRIPT_NAME']));
			}
			elseif (strpos($uri,dirname($_SERVER['SCRIPT_NAME'])) === 0)
			{	
				$uri = substr($uri,strlen(dirname($_SERVER['SCRIPT_NAME'])));
			}
		}
		// 请求参数处理
		if (trim($uri, '/') === '' && strncmp($query, '/', 1) === 0)
		{
			$query = explode('?', $query, 2);
			$uri = $query[0];
			$_SERVER['QUERY_STRING'] = isset($query[1]) ? $query[1] : '';
		}
		else
		{
			$_SERVER['QUERY_STRING'] = $query;
		}
		// 把查询字符串解析到变量
		parse_str($_SERVER['QUERY_STRING'], $_GET);

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
	 * @date 2015/5/17
	 */
	protected function _set_uri_string($uristr)
	{
		$this->uri_string = $uristr;
	
		if ($uristr !== '')
		{
			// 从配置文件读取URL后缀配置信息
			// $suffix = $this->config->item('url_suffix');
			$suffix = '.html';
			// URL后缀处理
			if ($suffix !== '')
			{
				$slen = strlen($suffix);      // 后缀长度
				
				// 如访问是URL不带后缀，则不执行这里
				if (substr($uristr, -$slen) === $suffix)
				{
					// 清除URL后缀
					$uristr = substr($uristr, 0, -$slen);
				}
			}
			
			// URIc处理
			$this->segments[0] = NULL;      // 占位
			$uriarr = explode('/', trim($uristr, '/'));
			foreach ($uriarr as $val)
			{
				$val = trim($val);
				if ($val !== '')
				{
					$this->segments[] = $val;
				}
			}
			unset($this->segments[0]);
		}
	}


}

?>