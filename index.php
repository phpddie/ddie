<?php
// 目录分隔符
if(!defined('DS')){
	define('DS', DIRECTORY_SEPARATOR);
}
// 站点目录
if(!defined('ROOT')){
	define('ROOT', dirname(__FILE__));
}
// 框架目录
if(!defined('CORE')){
	define('CORE', ROOT.DS.'DDIE');
}
// 默认项目目录
if(!defined('MODULE')){
	define('MODULE','app');
}
                   
// 引入内核文件
require_once CORE.DS.'Core.php';

?>