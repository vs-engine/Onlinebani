<?php
$xpdo_meta_map['OnlinebaniRegion']= array (
  'package' => 'onlinebani',
  'version' => '1.1',
  'table' => 'onlinebani_region',
  'extends' => 'xPDOSimpleObject',
  'tableMeta' => 
  array (
    'engine' => 'MyISAM',
  ),
  'fields' => 
  array (
    'region_id' => 0,
    'name_ru' => '',
    'description' => '',
    'active' => 0,
  ),
  'fieldMeta' => 
  array (
    'region_id' => 
    array (
      'dbtype' => 'int',
      'precision' => '10',
      'phptype' => 'integer',
      'attributes' => 'unsigned',
      'null' => false,
      'default' => 0,
    ),
    'name_ru' => 
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
    'region_id' => 
    array (
      'alias' => 'region_id',
      'primary' => false,
      'unique' => false,
      'type' => 'BTREE',
      'columns' => 
      array (
        'region_id' => 
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
    'GlCity' => 
    array (
      'class' => 'glCity',
      'local' => 'region_id',
      'foreign' => 'region_id',
      'cardinality' => 'many',
      'owner' => 'local',
    ),
  ),
);
