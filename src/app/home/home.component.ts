import { Component, OnInit } from '@angular/core';
import { Observable, interval, map, take } from 'rxjs';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [],
    templateUrl: './home.component.html',
    styleUrl: './home.component.sass'
})
export class HomeComponent implements OnInit {

    mensagens: string[] = [
        "Arredondando cantos...",
        "Escolhendo melhor cor...",
        "Fazendo carinho nos gatos...",
        "Bebendo água...",
        "Centralizando div...",
        "Procurando música...",
        "Procurando no StackOverFlow...",
        "Estudando Angular...",
        "Programando...",
        "Trabalhando...",
        "Criando variáveis...",
        "Criando funções...",
        "Procrastinando...",
        "Assistindo Fabio Akita...",
        "Reclamando do CSS...",
        "Preparando Café...",
        "Copiando e colando...",
        "Estilizando botões...",
        "Debugando código...",
        "Preparando Commit...",
        "Batendo cabeça...",
        "Reescrevendo tudo...",
        "Invocando o Flexbox...",

    ]

    textoAtual = " "
    subscription: any;

    ngOnInit(): void {
        this.fillTextoAtual()
        interval(4000).pipe(
            map(x => {
                this.fillTextoAtual()
            })
        ).subscribe()

    }

    fillTextoAtual() {
        this.textoAtual = " ";
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        var texto = this.mensagens[Math.floor(Math.random() * this.mensagens.length)];
        this.subscription = interval(100) // Emitir um caractere a cada 100 milissegundos
            .pipe(
                take(texto.length), // Emitir apenas o número necessário de caracteres
                map(i => texto.charAt(i)), // Obter o caractere na posição atual do índice
            )
            .subscribe(char => {
                this.textoAtual += char; // Adicionar o caractere ao texto atual
            });
    }
}
