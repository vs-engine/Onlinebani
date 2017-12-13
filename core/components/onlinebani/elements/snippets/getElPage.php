<?php
switch ($case){
    case "getEmail":
        $query = $modx->newQuery('modUserProfile', array(
            'internalKey' => $userId,
        ));
        $query->select('email');
        $email = $modx->getValue($query->prepare());
        return $email;
        break;
    case "urlVar":
        return $_GET[$nameVar];
        break;
}
