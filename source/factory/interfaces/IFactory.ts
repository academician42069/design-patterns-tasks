export interface IFactory<T> {
    create(type: string): T;
}
