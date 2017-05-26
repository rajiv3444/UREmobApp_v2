import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { Utils } from '../../utility/Utils';
import { DashBoardMainPage } from '../../pages/dashboard/dashboard-main';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  pageTitle: string = 'Login';
  backup: any;
  loginStatus: string;
  public displayResult: any[] = [];
  credentials = { username: '', password: '' };
  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthService, private utils: Utils) {
    this.credentials.username = 'root';
    this.credentials.password = 'unitrends1';
  }



  //router: Router;

  // constructor(private authService: AuthService, private utils: Utils, private logger: Logger, private router: Router, private alertController: AlertController) {
  //   //this.DoLogout();
  //   this.utils._isAuthentic = false;
  //   this.loginStatus = '';
  //   this.credentials.username = 'root';
  //   this.credentials.password = 'unitrends1';

  // }
  DoLogout() {
    this.utils.CleanAuthDetails();
  }

  Login() {
    this.navCtrl.push(DashBoardMainPage);
    // this.authService.DoLogin(this.credentials.username, this.credentials.password)
    //   .subscribe((resp) => {
    //     this.OnLoginSuccess(resp);
    //   },
    //   err => {
    //     this.OnLoginFailure();
    //   });
  }
  OnLoginSuccess(resp) {
    console.log('login success');
    let authToken = JSON.parse(resp['_body']).auth_token;
    this.utils.SetAuthTokenLocal(authToken);
    //this.logger.LogInfo('authToken: ' + authToken);
    console.log('authToken: ' + authToken);

    if (authToken != '') {
      this.utils._isAuthentic = true;
      this.loginStatus = 'Login success';
      //this.router.navigateByUrl('/dashboardmain');
      this.navCtrl.push(DashBoardMainPage);
    }
    else {
      this.OnLoginFailure();
    }
  }

  OnLoginFailure() {
    // this.utils._isAuthentic = false;
    // this.logger.LogError('login failed');
    // this.loginStatus = 'Login failed';
    // this.router.navigateByUrl('/login');
    // this.ALertLoginFailure();
  }

  // ALertLoginFailure() {
  //   let alert = this.alertController.create({
  //     title: 'Login',
  //     message: 'Login failed, Please verify uername and password.',
  //     buttons: ['Ok']
  //   });
  //   alert.present();
  // }

}
