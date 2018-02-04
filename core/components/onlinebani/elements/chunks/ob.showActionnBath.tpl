{if $published==0}
    {set $classTr="unpublished"}
    {set $fafa='<i class="fa fa-eye-slash" aria-hidden="true"></i>'}
    {set $titleA="Включить"}
    {set $action="enable"}
    {set $activeVal=1}
{else}
    {set $classTr="published"}
    {set $fafa='<i class="fa fa-eye" aria-hidden="true"></i>'}
    {set $titleA="Выключить"}
    {set $action="disable"}
    {set $activeVal=0}
{/if}
<tr class="{$classTr}" data-edit="{$id}">
    <td data-field="idres">{$id}</td>
    <td data-field="nameSection">{$nameSection}</td>
    <td data-field="pagetitle">{$pagetitle}</td>
    <td data-field="introtext">{$introtext}</td>
    <td data-field="pub_date">{$pub_date}</td>
    <td data-field="unpub_date">{$unpub_date}</td>
    <td data-field="imgResource"><img src="{$imgResource}" alt="" class="img-responsive" style="max-width:150px"/></td>
    <td class="tdActionsSection">
        <a class="disable-enable" href="{$_modx->resource.id | url}?id={$id}&action={$action}" title="{$titleA}">{$fafa}</a>
        <form class="formEnDis" method="post">
            <input type="hidden" name="casePar" value="saveActionBathData">
            <input type="hidden" name="caseSave" value="active"/>
            <input type="hidden" name="idres" value="{$id}">
            <input type="hidden" name="published" value="{$activeVal}">
        </form>
        | <a href="{$_modx->resource.id | url}?id={$id}&action=edit" title="редактировать админисратора"><i class="fa fa-pencil-square" aria-hidden="true"></i></a>
        | <a href="" title="Удалить удалить акцию"><i class="fa fa-trash" aria-hidden="true"></i></a>
    </td>
</tr>