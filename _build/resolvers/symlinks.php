<?php
/** @var xPDOTransport $transport */
/** @var array $options */
/** @var modX $modx */
if ($transport->xpdo) {
    $modx =& $transport->xpdo;

    $dev = MODX_BASE_PATH . 'Extras/Onlinebani/';
    /** @var xPDOCacheManager $cache */
    $cache = $modx->getCacheManager();
    if (file_exists($dev) && $cache) {
        if (!is_link($dev . 'assets/components/onlinebani')) {
            $cache->deleteTree(
                $dev . 'assets/components/onlinebani/',
                ['deleteTop' => true, 'skipDirs' => false, 'extensions' => []]
            );
            symlink(MODX_ASSETS_PATH . 'components/onlinebani/', $dev . 'assets/components/onlinebani');
        }
        if (!is_link($dev . 'core/components/onlinebani')) {
            $cache->deleteTree(
                $dev . 'core/components/onlinebani/',
                ['deleteTop' => true, 'skipDirs' => false, 'extensions' => []]
            );
            symlink(MODX_CORE_PATH . 'components/onlinebani/', $dev . 'core/components/onlinebani');
        }
    }
}

return true;