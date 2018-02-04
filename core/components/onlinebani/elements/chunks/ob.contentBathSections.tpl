{$_modx->runSnippet('!mFilter2',[
    'parents'           => '[[!getElPage?&case=`getGlResource`&glDataId=`[[!+gl.current.city.id]]`]]',
    'element'           => 'msProducts',
    'limit'              => 18,
    'sortby'            =>'menuindex',
    'sortdir'           =>'ASC',
    'filters'           => 'ms|price:number,
                            ms|section_capacity:number,
                            ms|city_region,
                            msoption|tags,
                            msoption|type_pait,
    ',

    'tplOuter'      => 'tpl.mFilter2.outer',
    'tpl'           => 'tpl.msProducts.row',
    'tpls'          => 'tpl.msProducts.row, tpl.msProducts.row',
    'ajaxMode'      => 'button',
    'class'         => 'msProduct',

    'tplFilter.outer.ms|price'  => 'tpl.mFilter2.filter.slider',
    'tplFilter.row.ms|price'    => 'tpl.mFilter2.filter.number',
    'tplFilter.outer.ms|section_capacity'  => 'tpl.mFilter2.filter.slider',
    'tplFilter.row.ms|section_capacity'    => 'tpl.mFilter2.filter.number',

])}
