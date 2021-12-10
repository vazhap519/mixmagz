<?php
$pdo=new PDO("mysqli:host=localhost;dbname=test","root"," ");
$pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
$pdo-exec();
$pdo->prepare();
