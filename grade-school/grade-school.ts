class GradeSchool{
    private _studentRoster: Map<string, string[]>;
    constructor(){
        this._studentRoster = new Map<string, string[]>();
    }

    public addStudent(name: string, grade: string|number): void{
        const names = this._studentRoster.get(grade.toString());
        if(names != undefined){
            names.push(name);
            names.sort();
        } else{
            this._studentRoster.set(grade.toString(), [name]);
        }
    }

    public studentRoster(): Map<string, string[]>{
        return this._studentRoster;
    }

    public studentsInGrade(grade: string|number): string[]{
        const names = this._studentRoster.get(grade.toString());
        if(names != undefined)
            return names;
        else return [];
    }
}

export default GradeSchool;