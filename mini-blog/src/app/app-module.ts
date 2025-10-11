import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { PostList } from './app/components/post-list/post-list';
import { PostDetail } from './app/components/post-detail/post-detail';
import { NewPostForm } from './app/components/new-post-form/new-post-form';

@NgModule({
  declarations: [
    App,
    PostList,
    PostDetail,
    NewPostForm
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
