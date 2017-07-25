/*+**********************************************************************************
 * The contents of this file are subject to the vtiger CRM Public License Version 1.0
 * ("License"); You may not use this file except in compliance with the License
 * The Original Code is: vtiger CRM Open Source
 * The Initial Developer of the Original Code is vtiger.
 * Portions created by vtiger are Copyright (C) vtiger.
 * All Rights Reserved.
 ************************************************************************************/

jQuery.Class('Install_Index_Js', {}, {

	registerEventForStep3: function () {
		jQuery('#recheck').on('click', function () {
			window.location.reload();
		});

		jQuery('input[name="step4"]').on('click', function (e) {
			var elements = jQuery('.no')
			if (elements.length > 0) {
				var msg = "برخی از تنظیمات PHP مقادیر توصیه شده را برآورده نمی کنند. این ممکن است برخی از ویژگی های vtiger CRM را تحت تاثیر قرار دهد. آیا مطمئن هستید که می خواهید ادامه دهید؟";
				if (confirm(msg)) {
					jQuery('form[name="step3"]').submit();
					return true;
				} else {
					return false;
				}
			}
			jQuery('form[name="step3"]').submit();
		});
	},

	registerEventForStep4: function () {
		jQuery('input[type="text"]').css('width', '210px');
		jQuery('input[type="password"]').css('width', '210px');

		jQuery('input[name="create_db"]').on('click', function () {
			var userName = jQuery('#root_user');
			var password = jQuery('#root_password');
			var classU = userName.attr('class');
			if (classU == 'hide')
				userName.removeClass('hide');
			else
				userName.addClass('hide');

			var classP = password.attr('class');
			if (classP == 'hide')
				password.removeClass('hide');
			else
				password.addClass('hide');
		});

		if (jQuery('input[name="create_db"]').prop('checked'))
		{
			jQuery('#root_user').removeClass("hide");
			jQuery('#root_password').removeClass("hide");
		}

		function clearPasswordError() {
			jQuery('#passwordError').html('');
		}

		function setPasswordError() {
			jQuery('#passwordError').html('لطفا رمز عبور را تکرار کنید .\"Password\" و \"Re-type password\" با یکدیگر برابر نیستند');
		}

		//This is not an event, we check if create_db is checked
		jQuery('input[name="retype_password"]').on('blur', function (e) {
			var element = jQuery(e.currentTarget);
			var password = jQuery('input[name="password"]').val();
			if (password !== element.val()) {
				setPasswordError();
			}
		});

		jQuery('input[name="password"]').on('blur', function (e) {
			var retypePassword = jQuery('input[name="retype_password"]');
			if (retypePassword.val() != '' && retypePassword.val() !== jQuery(e.currentTarget).val()) {
				jQuery('#passwordError').html('لطفا رمز عبور را دوباره تایپ کنید. مقادیر \"Password\" و \"Re-type password\" با یکدیگر برابر نیستند');
			} else {
				clearPasswordError();
			}
		});

		jQuery('input[name="retype_password"]').on('keypress', function (e) {
			clearPasswordError();
		});

		jQuery('input[name="step5"]').on('click', function () {
			var error = false;
			var validateFieldNames = ['db_hostname', 'db_username', 'db_name', 'password', 'retype_password', 'lastname', 'admin_email'];
			for (var fieldName in validateFieldNames) {
				var field = jQuery('input[name="' + validateFieldNames[fieldName] + '"]');
				if (field.val() == '') {
					field.addClass('error').focus();
					error = true;
					break;
				} else {
					field.removeClass('error');
				}
			}

			var createDatabase = jQuery('input[name="create_db"]:checked');
			if (createDatabase.length > 0) {
				var dbRootUser = jQuery('input[name="db_root_username"]');
				if (dbRootUser.val() == '') {
					dbRootUser.addClass('error').focus();
					error = true;
				} else {
					dbRootUser.removeClass('error');
				}
			}
			var password = jQuery('#passwordError');
			if (password.html() != '') {
				error = true;
			}

			var emailField = jQuery('input[name="admin_email"]');
			var regex = /^[_/a-zA-Z0-9*]+([!"#$%&'()*+,./:;<=>?\^_`{|}~-]?[a-zA-Z0-9/_/-])*@[a-zA-Z0-9]+([\_\-\.]?[a-zA-Z0-9]+)*\.([\-\_]?[a-zA-Z0-9])+(\.?[a-zA-Z0-9]+)?$/;
			if (!regex.test(emailField.val()) && emailField.val() != '') {
				var invalidEmailAddress = true;
				emailField.addClass('error').focus();
				error = true;
			} else {
				emailField.removeClass('error');
			}

			if (error) {
				var content;
				if (invalidEmailAddress) {
					content = '<div class="col-sm-12">' +
							'<div class="alert errorMessageContent">' +
							'<button class="close" data-dismiss="alert" type="button">x</button>' +
							'خطا! پست الکترونیکی معتبر نیست .' +
							'</div>' +
							'</div>';
				} else {
					content = '<div class="col-sm-12">' +
							'<div class="alert errorMessageContent">' +
							'<button class="close" data-dismiss="alert" type="button">x</button>' +
							'خطا ! فیلد های ستاره دار تکمیل گردد.' +
							'</div>' +
							'</div>';
				}
				jQuery('#errorMessage').html(content).removeClass('hide')
			} else {
				jQuery('form[name="step4"]').submit();
			}
		});
	},

	registerEventForStep5: function () {
		jQuery('input[name="step6"]').on('click', function () {
			var error = jQuery('#errorMessage');
			if (error.length) {
				alert('لطفا قبل از ادامه خطاهای موجود را برطرف نمایید');
				return false;
			} else {
				jQuery('form[name="step5"]').submit().hide();
			}
		});
	},

	registerEventForStep6: function () {
		jQuery('input[name="step7"]').on('click', function () {
			var industry = jQuery('select[name="industry"]').val();
			if (industry.length < 1) {
				alert('لطفا عنوان شغلی خود را انتخاب نمایید');
			} else {
				jQuery('#progressIndicator').removeClass('hide').addClass('show');
				jQuery('form[name="step6"]').submit().hide();
			}
		});
	},

	registerEvents: function () {
		jQuery('input[name="back"]').on('click', function () {
			var createDatabase = jQuery('input[name="create_db"]:checked');
			if (createDatabase.length > 0) {
				jQuery('input[name="create_db"]').removeAttr('checked');
			}
			window.history.back();
		});
		this.registerEventForStep3();
		this.registerEventForStep4();
		this.registerEventForStep5();
		this.registerEventForStep6();
	}
});
jQuery(document).ready(function() {
	var indexInstance = new Install_Index_Js();
	indexInstance.registerEvents();
});
