import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Nav } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../../providers/auth-service';
import { Utils } from '../../utility/Utils';
import { Logger } from '../../utility/Logger';
import { DashBoardMainPage } from '../../pages/dashboard/dashboard-main';
import { AssetsPage } from '../../pages/assets/assets';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  @ViewChild(Nav) nav: Nav;
  pageTitle: string = 'Login';
  backup: any;
  loginStatus: string;
  public displayResult: any[] = [];
  credentials = { username: '', password: '' };
  form: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthService,
    private utils: Utils, private logger: Logger, private alertController: AlertController, private formBuilder: FormBuilder) {
    this.DoLogout();
    this.utils._isAuthentic = false;
    this.loginStatus = '';
    this.credentials.username = 'root';
    this.credentials.password = 'unitrends1';

    this.form = formBuilder.group({
      username: ['', Validators.compose([Validators.minLength(3), Validators.maxLength(30), Validators.required])],
      password: ['', Validators.compose([Validators.minLength(3), Validators.maxLength(30), Validators.required])],
    });
  }

  ngOnInit() {
    this.logger.LogInfo('LoginPage: ngOnInit');
    this.utils.IsAuthenticated();    
    if(this.utils._isAuthentic)    
    {
      this.navCtrl.setRoot(DashBoardMainPage);
    }
  }

  DoLogout() {
    this.utils.CleanAuthDetails();
  }

  Login() {
    this.authService.DoLogin(this.credentials.username, this.credentials.password)
      .subscribe((resp) => {
        this.OnLoginSuccess(resp);
      },
      err => {
        this.OnLoginFailure();
      });
  }

  OnLoginSuccess(resp) {
    console.log('login success');
    let authToken = JSON.parse(resp['_body']).auth_token;

    if (authToken != '' && authToken != undefined) {
      this.utils.SetAuthTokenLocal(authToken);
      this.utils._isAuthentic = true;
      this.loginStatus = 'Login success';      
      this.navCtrl.setRoot(DashBoardMainPage);      
    }
    else {
      this.OnLoginFailure();
    }
  }

  OnLoginFailure() {
    this.utils._isAuthentic = false;
    this.logger.LogError('login failed');
    this.loginStatus = 'Login failed';    
    this.navCtrl.setRoot(LoginPage);
    this.ALertLoginFailure();
  }

  ALertLoginFailure() {
    let alert = this.alertController.create({
      title: 'Login',
      message: 'Login failed, Please verify username and password.',
      buttons: ['Ok']
    });
    alert.present();
  }

}
