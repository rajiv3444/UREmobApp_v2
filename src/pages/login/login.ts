import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Nav } from 'ionic-angular';
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
  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthService,
    private utils: Utils, private logger: Logger, private alertController: AlertController) {
    this.DoLogout();
    this.utils._isAuthentic = false;
    this.loginStatus = '';
    this.credentials.username = 'root';
    this.credentials.password = 'unitrends1';
  }
  
  ngOnInit() {
    this.logger.LogInfo('LoginPage: ngOnInit');
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
      //this.router.navigateByUrl('/dashboardmain');
      //this.nav.push(DashBoardMainPage);      
      this.navCtrl.setRoot(DashBoardMainPage);      
      //this.navCtrl.setRoot(AssetsPage);      
    }
    else {
      this.OnLoginFailure();
    }
  }

  OnLoginFailure() {
    this.utils._isAuthentic = false;
    this.logger.LogError('login failed');
    this.loginStatus = 'Login failed';
    //this.router.navigateByUrl('/login');
    this.ALertLoginFailure();
  }

  ALertLoginFailure() {
    let alert = this.alertController.create({
      title: 'Login',
      message: 'Login failed, Please verify uername and password.',
      buttons: ['Ok']
    });
    alert.present();
  }

}
