import { Component } from '@angular/core';
import { ItemToDo } from './ItemToDo';
import { ListToDo } from './listToDo';

@Component({
  
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-tarefas';
  
  public tarefa: ItemToDo = {id: '', descricao:'', dataCriacao: '', valorUpdate: ''};
  public tarefas  = ListToDo

  addTarefa() {
    let tarefaTeste: ItemToDo = {
      id: getUuid(),
      descricao: this.tarefa.descricao,
      dataCriacao: new Date().toLocaleString(),
      valorUpdate: this.tarefa.valorUpdate
    }
    this.tarefas.push(tarefaTeste)
    this.tarefa = {id: '', descricao:'', dataCriacao: '', valorUpdate: ''};
  }

  removeTarefa(item: ItemToDo) {
    this.tarefas.splice(this.tarefas.indexOf(item), 1)
  }

  updateTarefa(item: ItemToDo) {
    item.descricao = item.valorUpdate
    item.valorUpdate = ''
  }
}

function getUuid() {
  var dt = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (dt + Math.random() * 16) % 16 | 0;
    dt = Math.floor(dt / 16);
    return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
  return uuid;
}