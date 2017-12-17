{if $published==0}
    {set $classTr="unpublished"}
    {set $fafa='<i class="fa fa-eye-slash" aria-hidden="true"></i>'}
    {set $titleA="Включить"}
    {set $action="enable"}
    {set $publishedVal=1}
{else}
    {set $classTr="published"}
    {set $fafa='<i class="fa fa-eye" aria-hidden="true"></i>'}
    {set $titleA="Выключить"}
    {set $action="disable"}
    {set $publishedVal=0}
{/if}
<tr class="{$classTr}">
    <td>{$id}</td>
    <td><a href="{$id | url}">{$pagetitle}</a></td>
    <td>[[#{$parent}.pagetitle]]</td>
    <td>section_type</td>
    <td>section_price</td>
    <td>section_capacity</td>
    <td class="tdActionsSection">
        <a class="disable-enable" href="{$_modx->resource.id | url}?pid={$id}&action={$action}" title="{$titleA}">{$fafa}  </a><form class="formEnDis" method="post"><input type="hidden" name="casePar" value="saveBathData"><input type="hidden" name="idres" value="{$id}"><input type="hidden" name="published" value="{$publishedVal}"></form>
        | <a href="{$_modx->resource.id | url}?pid={$id}&action=edit" title="редактировать отделение"><i class="fa fa-pencil-square" aria-hidden="true"></i></a>
        | <a href="" title="Удалить отделение"><i class="fa fa-trash" aria-hidden="true"></i></a>
    </td>
</tr>