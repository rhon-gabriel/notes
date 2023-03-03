export interface Props {
    handleSubmit(): void;
    handleChange(e: any): void;
    note: { id: string, title: string, text: string}
}