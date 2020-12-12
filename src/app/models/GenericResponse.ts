export interface GenericResponse<T> {
    success:boolean;
    new_color?:string | null;
    message?:string | null;
    data?: T;
}
