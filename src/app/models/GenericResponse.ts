export interface GenericResponse<T> {
    success:boolean;
    hex?:string | null;
    message?:string | null;
    data?: T;
}
