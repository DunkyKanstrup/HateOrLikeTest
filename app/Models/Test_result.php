<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property string $model
 * @property double $successrate
 */
class Test_result extends Model
{
    use HasFactory;
}
