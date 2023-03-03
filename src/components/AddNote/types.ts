export interface Props {
    handleSubmit(): void;
    handleChange(event: React.ChangeEvent<HTMLElement>): void;
    note: { id: string, title: string, text: string}
}