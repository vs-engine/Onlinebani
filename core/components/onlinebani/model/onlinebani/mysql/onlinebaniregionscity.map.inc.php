<?php
$xpdo_meta_map['OnlinebaniRegionsCity']= array (
  'package' => 'onlinebani',
  'version' => '1.1',
  'table' => 'onlinebani_regions_city',
  'extends' => 'xPDOSimpleObject',
  'tableMeta' => 
  array (
    'engine' => 'MyISAM',
  ),
  'fields' => 
  array (
    'regionc_id' => 0,
    'namec_ru' => '',
    'description' => '',
    'lat' => 0.0,
    'lon' => 0.0,
    'active' => 0,
  ),
  'fieldMeta' => 
  array (
    'regionc_id' => 
    array (
      'dbtype' => 'int',
      'precision' => '10',
      'phptype' => 'integer',
      'attributes' => 'unsigned',
      'null' => false,
      'default' => 0,
    ),
    'namec_ru' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '128',
      'phptype' => 'varchar',
      'null' => false,
      'default' => '',
    ),
    'description' => 
    array (
      'dbtype' => 'text',
      'phptype' => 'text',
      'null' => true,
      'default' => '',
    ),
    'lat' => 
    array (
      'dbtype' => 'decimal',
      'precision' => '10,5',
      'phptype' => 'float',
      'null' => false,
      'default' => 0.0,
    ),
    'lon' => 
    array (
      'dbtype' => 'decimal',
      'precision' => '10,5',
      'phptype' => 'float',
      'null' => false,
      'default' => 0.0,
    ),
    'active' => 
    array (
      'dbtype' => 'tinyint',
      'precision' => '1',
      'attributes' => 'unsigned',
      'phptype' => 'integer',
      'null' => false,
      'default' => 0,
    ),
  ),
  'indexes' => 
  array (
    'regionc_id' => 
    array (
      'alias' => 'regionc_id',
      'primary' => false,
      'unique' => false,
      'type' => 'BTREE',
      'columns' => 
      array (
        'regionc_id' => 
        array (
          'length' => '',
          'collation' => 'A',
          'null' => false,
        ),
      ),
    ),
  ),
  'composites' => 
  array (
    'OnlinebaniRegion' => 
    array (
      'class' => 'OnlinebaniRegion',
      'local' => 'regionc_id',
      'foreign' => 'id',
      'cardinality' => 'one',
      'owner' => 'foreign',
    ),
  ),
);
