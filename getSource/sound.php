<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
define('DS', DIRECTORY_SEPARATOR);
define('PS', PATH_SEPARATOR);
define('BP', dirname(dirname(__FILE__)));

$soundJson = file_get_contents(BP . DS . 'sounds.json');
$soundJson = json_decode($soundJson);
$soundJson = $soundJson->sounds;

$http = 'http://fieldrunnershtml5.appspot.com/asset/Sounds/';
foreach ($soundJson as $value) {
    $fileContent = file_get_contents($http . $value);
    file_put_contents(BP . DS . 'asset' . DS . 'Sounds' . DS . $value, $fileContent);
}

$fileCollection = scandir(BP . DS . 'asset' . DS . 'Sounds');
echo '<pre>';print_r($fileCollection);
