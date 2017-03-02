import { Component, ViewChild } from '@angular/core'
import { ionicBootstrap, MenuController, Nav, Platform } from 'ionic-angular'
import { StatusBar } from 'ionic-native'
import { HelloIonicPage } from './pages/hello-ionic/hello-ionic'
import { ListPage } from './pages/list/list'

@Component({
  templateUrl: 'build/app.html',
})
class MyApp {
  @ViewChild(Nav)
  private nav: Nav

  // make HelloIonicPage the root (or first) page
  private rootPage: any = HelloIonicPage
  private pages: Array<{ title: string, component: any }>

  constructor(
    private platform: Platform,
    private menu: MenuController,
  ) {
    this.initializeApp()

    // set our app's pages
    this.pages = [
      { title: 'Hello Ionic', component: HelloIonicPage },
      { title: 'My First List', component: ListPage },
    ]
  }

  private initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault()
    })
  }

  private openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close()
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component)
  }
}

ionicBootstrap(MyApp)
