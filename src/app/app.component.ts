import { Component, Input } from '@angular/core';
import { ItemToDo } from './ItemToDo';
import { ListToDo } from './listToDo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-tarefas';

  public tarefa = "";
  public tarefas  = ListToDo

  addTarefa() {
    let tarefaTeste: ItemToDo = {
      id: '1',
      descricao: this.tarefa,
      dataCriacao: 0,
      valorUpdate: ''
    }
    this.tarefas.push(tarefaTeste)
    this.tarefa = ''
  }

  removeTarefa(item: ItemToDo) {
    this.tarefas.splice(this.tarefas.indexOf(item), 1)
  }

  updateTarefa(item: ItemToDo) {
    item.descricao = item.valorUpdate
    item.valorUpdate = ''
  }
}
