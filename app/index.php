<?php

// 这是项目入口文件，可用在这里进行各种判断处理



 // 目录分隔符
if(!defined('DS')){define('DS', DIRECTORY_SEPARATOR);}     
// 项目目录
if (!defined('ROOT')){define('ROOT',dirname(dirname(__FILE__)));}
// 框架目录
if (!defined('CORE')){define('CORE',ROOT.DS.'DDIE');}
// 项目目录
if(!defined('APPPATH')){define('APPPATH','app');}
// 视图目录
if(!defined('VIEWPATH')){define('VIEWPATH',ROOT.DS.APPPATH.DS.'View');}

// 引入内核文件
require_once CORE.DS.'Core.php';
?>