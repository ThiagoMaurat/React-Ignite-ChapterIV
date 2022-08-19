import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/SideBar";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type CreateUserFormData = {
  email: string;
  name: string;
  password: string;
  passwordConfirmation: string;
};

const CreateUserFormSchema = yup.object().shape({
  name: yup.string().required("Nome é obrigatório"),
  email: yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
  password: yup
    .string()
    .required("Senha é obrigatória")
    .min(6, "Senha deve ter no mínimo 6 caracteres"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Senhas não conferem"),
});

const handleCreateUser: SubmitHandler<CreateUserFormData> = async (data) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
};

export default function Create() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    formState,
  } = useForm<CreateUserFormData>({
    resolver: yupResolver(CreateUserFormSchema),
  });
  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        <Box
          onSubmit={handleSubmit(handleCreateUser)}
          as="form"
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p={["6", "8"]}
        >
          <Heading size="lg" fontWeight={"normal"}>
            Criar usuário
          </Heading>
          <Divider my="6" borderColor={"gray.700"} />
          <VStack spacing={"8"}>
            <SimpleGrid minChildWidth={"240px"} spacing={["6", "8"]} w="100%">
              <Input
                error={errors.name}
                {...register("name")}
                name="name"
                label="Nome completo"
              />
              <Input
                {...register("email")}
                name="email"
                type="email"
                label="E-mail"
                error={errors.email}
              />
            </SimpleGrid>
            <SimpleGrid minChildWidth={"240px"} spacing={["6", "8"]} w="100%">
              <Input
                {...register("password")}
                name="password"
                type="password"
                label="Nome completo"
                error={errors.password}
              />
              <Input
                name="password_confirmation"
                error={errors.passwordConfirmation}
                type="password"
                label="Confirmação da senha"
                {...register("passwordConfirmation")}
              />
            </SimpleGrid>
          </VStack>
          <Flex mt="8" justify={"flex-end"}>
            <HStack spacing={"4"}>
              <Link href="/users/create" passHref>
                <Button as="a" colorScheme="whiteAlpha">
                  Cancelar
                </Button>
                <Button
                  isLoading={formState.isSubmitting}
                  type="submit"
                  as="a"
                  colorScheme="pink"
                >
                  Salvar
                </Button>
              </Link>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
