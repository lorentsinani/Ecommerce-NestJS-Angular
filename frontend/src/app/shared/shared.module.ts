import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat/chat.component';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error/error.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [ChatComponent, ErrorComponent]
})
export class SharedModule {}
