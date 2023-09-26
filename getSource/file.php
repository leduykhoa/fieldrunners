<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
define('DS', DIRECTORY_SEPARATOR);
define('PS', PATH_SEPARATOR);
define('BP', dirname(dirname(__FILE__)));

$directoryCollection = array(
    'Application',
    'Common',
    'Enemies',
    'Fonts',
    'Localization', //directory
    'Maps',
    'Music',
    'Particles',
    'Projectiles',
    'Shaders',
    'Sounds',
    'Towers',
    'UserInterface'
);




foreach ($directoryCollection as $directoryItem) {
    $directory = $directoryItem;
    $directoryPath = BP . DS . 'asset' . DS . $directory;
    $fileCollection = scandir($directoryPath);
    $http = 'http://fieldrunnershtml5.appspot.com/asset/' . $directory . '/';
    
    foreach ($fileCollection as $file) {
        if(is_file($directoryPath . DS . $file)){
            processFile($file,$http,$directoryPath);
        }  elseif(is_dir($directoryPath . DS . $file)) {

            $fileCollection2 = scandir($directoryPath . DS . $file);
            $http2 = $http . $file . '/';
            $directoryPath2 = $directoryPath . DS . $file;
            foreach ($fileCollection2 as $file2) {
                if(is_file($directoryPath2 . DS . $file2)){
                    processFile($file2,$http2,$directoryPath2);
                }
            }
        }    
    }
    echo ($directoryItem . '<br/>');
}


////////////////////////////////////////////////////////////////////////////////
function processFile($file,$url,$path){
    $fileContent = file_get_contents($url . $file);
    if($fileContent!=''){
        file_put_contents($path . DS . $file, $fileContent);
    }else{
        unlink($path . DS . $file);
    }
}
die('done');
//echo '<pre>';print_r(scandir($directoryPath));
