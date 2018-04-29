import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { listLocales } from 'ngx-bootstrap/chronos';

@Component({
	selector: 'app-account',
	templateUrl: './account.component.html',
	styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
	public names = [
		'龙猫',
		'龙湖',
		'顶峰'
	];
	public platforms = [
		'小猪',
		'AirBnb',
		'蚂蚁'
	];
	public persons = [
		'蕾',
		'王',
		'李'
	];

	public income = 0;
	public locale = 'en';
	public locales = listLocales();

	constructor(private _localeService: BsLocaleService) {
		_localeService.use('zh-cn');
	}

	ngOnInit() {
	}

	public applyLocale() {
		this._localeService.use(this.locale);
		// pop.hide();
		// pop.show();
	}
}
