enum Environments {
    local_environment = 'local',
    dev_environment = 'dev',
    prod_environment = 'prod',
    qa_environment = 'qa'
}

class Environment {
    private environment: string;

    constructor(environment: string) {
        this.environment = environment;
    }

    getPort(): number {
        if (this.environment === Environments.prod_environment) {
            return 8081;
        } else if (this.environment === Environments.dev_environment) {
            return 8082;
        } else if (this.environment === Environments.qa_environment) {
            return 8083;
        } else {
            return 3030;
        }
    }

    getDBName(): string {
        if (this.environment === Environments.prod_environment) {
            return 'db_test_project_prod';
        } else if (this.environment === Environments.dev_environment) {
            return 'db_test_project_dev';
        } else if (this.environment === Environments.qa_environment) {
            return 'db_test_project_qa';
        } else {
            return 'db_test_project_local';
        }
    }
}

export default new Environment(Environments.local_environment);