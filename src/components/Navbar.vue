<template>
<div class="mb-5">

  <b-navbar toggleable="md" type="dark" variant="dark">
    <b-navbar-brand href="#" class="font-weight-bold">NavBar</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item>
            <router-link to="/">
                Início
            </router-link>
        </b-nav-item>

        <b-nav-item>
            <router-link to="/cadastro">
                Cadastrar
            </router-link>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

</div>
</template>