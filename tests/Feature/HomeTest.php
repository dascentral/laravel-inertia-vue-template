<?php

it('returns a successful response for the home page', function () {
    $response = $this->get('/');

    $response->assertStatus(200);
});
