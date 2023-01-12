export interface Task   {
	_id: string
	title: string
	description: string
	priority: Priorities
	status:Status

}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TaskOmitId extends Omit<Task,'_id'> {}



export type Priorities = 1 | 2 | 3

export type Status = 'To do' | 'In progress' | 'Done'
