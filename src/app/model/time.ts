export interface TimeFrame {
    id: number,
	name: string
}

export interface TimeConfig {
    timeOptions: TimeFrame[], 
    selectedId: number
}
