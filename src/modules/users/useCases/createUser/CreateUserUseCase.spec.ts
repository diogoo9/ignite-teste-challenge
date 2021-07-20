// create user, where email exists

import { InMemoryUsersRepository } from "../../repositories/in-memory/InMemoryUsersRepository";
import { CreateUserUseCase } from "./CreateUserUseCase"

let createUserUseCase: CreateUserUseCase;
let inMemoryUsersRepository :InMemoryUsersRepository

describe("Create user",()=>{
    beforeEach(()=>{
        inMemoryUsersRepository = new InMemoryUsersRepository();
        createUserUseCase = new CreateUserUseCase(inMemoryUsersRepository);
    })

     
    it("should be able create a new user",async ()=>{
        const response = await createUserUseCase.execute({
            name: 'Diogo',
            email:'diogo@rentx.com.br',
            password:'12345'
        })

        expect(response).toHaveProperty('id');
    })
})