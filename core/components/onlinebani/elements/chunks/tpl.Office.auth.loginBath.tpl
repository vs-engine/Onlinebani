<div class="row" id="office-auth-form">
    <div class="col-md-6 office-auth-login-wrapper">
        <h4>[[%office_auth_login]]</h4>

        <form method="post" class="form-horizontal" id="office-auth-login">
            <div class="form-group">
                <label for="office-auth-login-email" class="col-md-3 control-label">[[%office_auth_login_username]]&nbsp;<span class="red">*</span></label>
                <div class="col-md-8">
                    <input type="text" name="username" placeholder="" class="form-control" id="office-auth-login-username" value="" />
                    <p class="help-block"><small>[[%office_auth_login_username_desc]]</small></p>
                </div>

                <label for="office-auth-login-password" class="col-md-3 control-label">[[%office_auth_login_password]]</label>
                <div class="col-md-8">
                    <input type="password" name="password" placeholder="" class="form-control" id="office-login-form-password" value="" />
                    <p class="help-block"><small>[[%office_auth_login_password_desc]]</small></p>
                </div>

                <input type="hidden" name="action" value="auth/formLogin" />
                <input type="hidden" name="return" value="" />
                <div class="col-sm-offset-3 col-sm-8">
                    <button type="submit" class="btn btn-primary">[[%office_auth_login_btn]]</button>
                </div>
            </div>
        </form>

        <label>[[%office_auth_login_ha]]</label>
        <div>[[+providers]]</div>
        <p class="help-block"><small>[[%office_auth_login_ha_desc]]</small></p>

        [[+error:notempty=`
        <div class="alert alert-block alert-danger alert-error">[[+error]]</div>
        `]]
    </div>
</div>