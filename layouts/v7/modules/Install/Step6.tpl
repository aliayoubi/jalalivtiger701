{*+**********************************************************************************
* The contents of this file are subject to the vtiger CRM Public License Version 1.1
* ("License"); You may not use this file except in compliance with the License
* The Original Code is: vtiger CRM Open Source
* The Initial Developer of the Original Code is vtiger.
* Portions created by vtiger are Copyright (C) vtiger.
* All Rights Reserved.
************************************************************************************}

<form class="form-horizontal" name="step6" method="post" action="index.php">
	<input type=hidden name="module" value="Install" />
	<input type=hidden name="view" value="Index" />
	<input type=hidden name="mode" value="Step7" />
	<input type=hidden name="auth_key" value="{$AUTH_KEY}" />

	<div class="row main-container">
		<div class="inner-container">
			<div class="row">
				<div class="col-sm-10" style="float:left!important;" >
					<h4>{vtranslate('LBL_ONE_LAST_THING','Install')}</h4>
				</div>
				<div class="col-sm-2">
					<a href="http://favtiger.ir/category/%d8%a2%d9%85%d9%88%d8%b2%d8%b4/%d9%86%d8%b5%d8%a8-%d9%88-%d8%b1%d8%a7%d9%87-%d8%a7%d9%86%d8%af%d8%a7%d8%b2%db%8c/" target="_blank" class="pull-right" style="float:left!important;" >
						<img src="{'help.png'|vimage_path}" alt="Help-Icon"/>
					</a>
				</div>
			</div>
			<hr>
			<div class="offset2 row">
				<div class="col-sm-2"></div>
				<div class="col-sm-8">
					<table class="config-table input-table" style="direction: rtl;" >
						<tbody>
							<tr>
								<td><strong>عنوان شغلی خود را انتخاب نمایید</strong> <span class="no">*</span></td>
								<td>
									<select name="industry" class="select2" required="true" style="width:250px;" placeholder="انتخاب نمایید...">
											<option>حسابداری</option>
<option>تبلیغات</option>
<option>کشاورزی</option>
<option>پوشاک و آمپر تجهیزات جانبی</option>
<option>خودرو</option>
<option>بانکداری و خدمات مالی</option>
<option>بیوتکنولوژی</option>
<option>مراکز تماس</option>
<option>شغل / اشتغال</option>
<option>شیمیایی</option>
<option>سخت افزار رایانه</option>
<option>نرم افزار کامپیوتر</option>
<option>مشاوره</option>
<option>ساخت و ساز</option>
<option>تحصیلات</option>
<option>خدمات انرژی</option>
<option>مهندسی</option>
<option>سرگرمی</option>
<option>مالی</option>
<option>غذا و آمپر سرویس غذا</option>
<option>دولت</option>
<option>مراقبت های بهداشتی</option>
<option>بیمه</option>
<option>قانونی</option>
<option>تدارکات</option>
<option>ساخت</option>
<option>رسانه ها و و تولید</option>
<option>غیر انتفاعی</option>
<option>دارویی</option>
<option>مشاور املاک</option>
<option>اجاره ای</option>
<option>خرده فروشی و عمده فروشی</option>
<option>امنیت</option>
<option>سرویس</option>
<option>ورزش ها</option>
<option>ارتباطات مخابراتی</option>
<option>حمل و نقل</option>
<option>سفر و گردشگری</option>
<option>خدمات رفاهی</option>
<option>دیگر</option>
									</select>
								</td>
							</tr>
							<tr>
								<td colspan="2">									
									سايت ويتايگر اطلاعات را با هويت نامشخص جمع آوري مي کند تا به آنها براي بهبود ورژن هاي آينده کمک کند. اطلاعات در اين باره هستند که چطور و کجا ويتايگر استفاده مي گردد تا حيطه استفاده از اين نرم افزار توسعه داده شود. 
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<div class="row offset2">
				<div class="col-sm-2"></div>
				<div class="col-sm-8">
					<div class="button-container">
						<input type="button" class="btn btn-large btn-primary" value="{vtranslate('LBL_NEXT','Install')}" name="step7"/>
					</div>
				</div>
			</div>
		</div>
	</div>
</form>
<div id="progressIndicator" class="row main-container hide">
	<div class="inner-container">
		<div class="inner-container">
			<div class="row">
				<div class="col-sm-12 welcome-div alignCenter">
					<h3>{vtranslate('LBL_INSTALLATION_IN_PROGRESS','Install')}...</h3><br>
					<img src="{'install_loading.gif'|vimage_path}"/>
					<h6>{vtranslate('LBL_PLEASE_WAIT','Install')}.... </h6>
				</div>
			</div>
		</div>
	</div>
</div>