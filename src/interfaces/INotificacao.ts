export enum TipoNotificacao {
    SUCESSO,
    FALHA,
    ATENÇÃO
}

export default interface INotificacao {
    titulo: string;
    texto: string;
    tipo: TipoNotificacao;
    id:  number;
}