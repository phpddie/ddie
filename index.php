<?php
// 目录分隔符
if(!defined('DS')){
	define('DS', DIRECTORY_SEPARATOR);
}
// 项目目录
if(!defined('ROOT')){
	define('ROOT', dirname(__FILE__));
}
// 框架目录
if(!defined('CORE')){
	define('CORE', ROOT.DS.'DDIE');
}
// 应用目录
if(!defined('APPPATH')){
	define('APPPATH','app');
}                   
// 引入默认项目首页
require ROOT . DS . APPPATH . DS . 'index.php';
?>