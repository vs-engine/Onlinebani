{switch $.get['action']}
    {case 'edit'}

    {case 'delete'}

    {case default}
    <table class="table list-sections">
        <thead>
        <tr>
            <th>ID</th>
            <th>ФИО</th>
            <th>Логин</th>
            <th>Дата рождения</th>
            <th>Телефон</th>
            <th>E-mail</th>
            <th>Действия</th>
        </tr>
        </thead>
        <tfoot>
        <tr>
            <th>ID</th>
            <th>ФИО</th>
            <th>Логин</th>
            <th>Дата рождения</th>
            <th>Телефон</th>
            <th>E-mail</th>
            <th>Действия</th>
        </tr>
        </tfoot>
        <tbody>
            <div class="getListAdminBath|action"></div>

        </tbody>


    </table>
{/switch}